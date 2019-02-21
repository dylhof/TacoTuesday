import {fetchCall} from './Api'

describe('Api', () => {
  let mockURL;
  let mockReturnData;
  
  beforeEach(() => {
    mockURL = 'TacoFancy.com'
    mockReturnData= {baseLayer: {name: 'Bell Pepper'}, mixin: {name: 'Cheese'}}
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        json: () => Promise.resolve(mockReturnData),
        ok: true
      })
    );
  });

  it('should call fetch with the correct parameters', () => {
    //execution
    fetchCall(mockURL)
    //expectation
    expect(window.fetch).toHaveBeenCalledWith(mockURL)
  })

  it('should return data if the response is ok', async () => {
    //execution
    const result = await fetchCall(mockURL)
    //expectation
    expect(result).toEqual(mockReturnData)
  })

  it('should throw an error if the response is not ok', async () => {
    //setup
    const expectedError = Error('Error fetching Tacos, code: 404')
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 404,
        ok: false
      })
    );
    //execution & expectation
    await expect(fetchCall(mockURL)).rejects.toEqual(expectedError)
  })

})