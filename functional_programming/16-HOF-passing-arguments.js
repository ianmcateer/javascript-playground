// how do we pass arguments??
const filters = (condition, isTrue, isFalse, param) => {
  return condition ? isTrue(param) : isFalse(param);
};


filters(true,
  (name='not defined') => console.log(`hello true ${name}`),
  () => console.log(`hello false ${name}`),
  'ian'
)