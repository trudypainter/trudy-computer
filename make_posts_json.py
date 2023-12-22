
import os
import json

list_of_posts = []

dir = "pages/projects/"
exclude_list = ["personal-narrative", "trudy-computer"]

filenames = os.listdir(dir)
for filename in filenames:
    if os.path.isfile(dir + filename):
        f = open(dir + filename)

        test = f.read()
        split = test.split("---")
        meta_lines = split[1].split("\n")
        meta_lines = [x for x in meta_lines if x]

        post_dict={}
        for line in meta_lines:
            fragmented = line.split(":")
            key = fragmented[0]
            value = ":".join(fragmented[1:])
            post_dict[key] = value[1:]
        post_dict['slug'] = "/projects/" + filename[:-4]
        list_of_posts.append(post_dict)



json_object = json.dumps({"posts" : sorted(list_of_posts, key=lambda d: int(d['priority']), reverse=True) }, indent=4)
with open("posts.json", "w") as outfile:
    outfile.write(json_object)

print("⭐️ updated metadata...")