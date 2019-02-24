export const SET_LOADING = 'SET_LOADING';
export const SET_RANDO_TACO = 'SET_RANDO_TACO';
export const SET_ERROR = 'SET_ERROR';

export const setLoading = isLoading => ({
  type: SET_LOADING,
  isLoading
});

export const setRandoTaco = taco => ({
  type: SET_RANDO_TACO,
  taco
});

export const setError = error => ({
  type: SET_ERROR,
  error
})

export const setBaseLayers = baseLayers => ({
  type: 'SET_BASE_LAYERS',
  baseLayers
})

export const setMixins = mixins => ({
  type: 'SET_MIXINS',
  mixins
})

export const setSeasonings = seasonings => ({
  type: 'SET_SEASONINGS',
  seasonings
})

export const setCondiments = condiments => ({
  type: 'SET_CONDIMENTS',
  condiments
})

export const setShells = shells => ({
  type: 'SET_SHELLS',
  shells
})