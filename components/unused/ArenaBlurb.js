import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Arena = require('are.na');
const arena = new Arena();

export function ArenaBlurb() {
  const [blocks, setBlocks] = useState([]);
  const channelId = 'things-i-like-eruhck1o7r0'; // replace with your channel id

  useEffect(() => {
    const buildReqParams = (channelObj) => {
      let page = 0;
      let paramList = [];
      while (page * 100 < channelObj.length + 1) {
        page += 1;
        paramList.push({ page: page, per: 100 });
      }
      return paramList;
    };

    const getRestOfChannel = async (chanObj) => {
      let paramList = buildReqParams(chanObj);

      console.log('getting rest of chan');
      Promise.all(
        paramList.map((param) => arena.channel(channelId).get(param))
      ).then((responses) => {
        console.log('😀', responses);

        let contentList = [];
        for (let response of responses) {
          contentList = [...contentList, ...response.contents];
        }
        const sortedBlocks = contentList.sort(
          (a, b) => new Date(b.connected_at) - new Date(a.connected_at)
        );

        setBlocks(sortedBlocks.slice(0, 50));
      });
    };

    const getChannelContents = () => {
      arena
        .channel(channelId)
        .get({ page: 1, per: 100 })
        .then((chan) => {
          console.log('😀', chan);
          getRestOfChannel(chan);
        })
        .catch((err) => console.log(err));
    };

    getChannelContents();
  }, [channelId]);

  return (
    <>
      <div className="w-full lg:flex text-3xl bg-purple-200 p-6 py-20 border-r-4 border-b-4 border-black justify-between">
        <div className="  mb-16">
          <p className=" w-[600px]">
            I really like the platform{' '}
            <a className="underline" href="https://www.are.na/trudy-painter">
              Are.na
            </a>
            . These are some of the blocks I've added recently.
          </p>
        </div>

        <div className="w-[680px]">
          <div className="border-2 border-r-black border-t-black border-l-black w-fit px-4 py-2 bg-white underline hover:no-underline ">
            <Link
              href={
                'https://www.are.na/trudy-painter/things-i-like-eruhck1o7r0'
              }
            >
              things i like ↗
            </Link>
          </div>
          <div className="flex justify-between flex-wrap bg-white p-4 border-2 border-black  h-96 overflow-scroll">
            {blocks.map((block) => (
              <div key={block.id}>
                <img
                  className="w-32 h-32 p-2 object-fill"
                  src={block.image.square.url}
                ></img>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-white p-6 border-l-4 border-b-4 border-black"></div>
    </>
  );
}
