export const SET_LOADING = 'SET_LOADING';
export const SET_RANDO_TACO = 'SET_RANDO_TACO';
export const SET_ERROR = 'SET_ERROR';
export const SET_BASE_LAYERS = 'SET_BASE_LAYERS';
export const SET_MIXINS = 'SET_MIXINS';
export const SET_SEASONINGS = 'SET_SEASONINGS';
export const SET_CONDIMENTS = 'SET_CONDIMENTS';
export const SET_SHELLS = 'SET_SHELLS';


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

export const setBase_layers = baseLayers => ({
  type: SET_BASE_LAYERS,
  baseLayers
})

export const setMixins = mixins => ({
  type: SET_MIXINS,
  mixins
})

export const setSeasonings = seasonings => ({
  type: SET_SEASONINGS,
  seasonings
})

export const setCondiments = condiments => ({
  type: SET_CONDIMENTS,
  condiments
})

export const setShells = shells => ({
  type: SET_SHELLS,
  shells
})