const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let ixx = await promiseTheaterIXX();
  let vgc = await promiseTheaterVGC();

  let cinemas = ixx.concat(vgc);
  let emotionResults = 0;

  cinemas.map( ixx => ixx.hasil === emosi && (emotionResults += 1) );

  return emotionResults;
};

module.exports = {
  promiseOutput,
};
