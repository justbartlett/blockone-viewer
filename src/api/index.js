import { JsonRpc } from 'eosjs';

const rpc = new JsonRpc('https://api.eossweden.org');

export function fetchBlocks(id, count) {
  let blockId = Number(id);
  let promises = [];
  for (let i = 0; i < count; i++) {
    promises.push(rpc.get_block(blockId));
    blockId -= 1;
  }
  return Promise.all(promises);
}

export function fetchHeadBlock() {
  return rpc.get_info();
}
