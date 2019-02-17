function getToneStyleObject(tone) {
  const s = parseInt(tone[0]) - 1;
  const t = parseInt(tone[1]) - 1;

  if (isNaN(s) || isNaN(t)) {
    return null;
  }

  const red = 191 + (s - t) * 16;
  const green = 127 + s * 32;
  const blue = 127 + t * 32;

  return {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  };
}

export default {
  getToneStyleObject,
}
