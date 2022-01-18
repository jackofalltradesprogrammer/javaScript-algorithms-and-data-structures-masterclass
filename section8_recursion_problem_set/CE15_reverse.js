function reverse(str) {
  const length = str.length;
  if (!(length - 1)) return str;

  const char = str[length - 1];
  str = str.substr(0, length - 1);
  return char + reverse(str);
}

const a = reverse('awesome'); // 'emosewa' //?
// reverse('rithmschool') // 'loohcsmhtir'
