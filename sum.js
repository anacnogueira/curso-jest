function sum(a, b) {
  const int1 = parseInt(a, 10);
  const int2 = parseInt(b, 10);

  if (Number.isNaN(int1) || Number.isNaN(int2)) {
    throw new Error('Please check your input');
  }

  return int1 + int2;
}

export default sum;
