export const types = {
	KITTENS: {
    ADD: 'ADD'
  },
  KITTEN: {
    SELECT: 'SELECT'
  }
};

const kittensAdd = payload => ({
	type: types.KITTENS.ADD,
	payload
});

const kittenSelect = payload => ({
	type: types.KITTEN.SELECT,
	payload
});


export { kittensAdd, kittenSelect };
