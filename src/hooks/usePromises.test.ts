import { renderHook } from '@testing-library/react-hooks';
import usePromises from './usePromises';

const getResolvingPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 200);
  });
};
const getFailingPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('oops'), 200);
  });
};

describe('usePromises', () => {
  it('returns correct data if promises resolve', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      usePromises([getResolvingPromise(), getResolvingPromise()])
    );

    await waitForNextUpdate();
    const expectedResolvedPromisesData = [true, true];
    expect(result.current.data).toEqual(expectedResolvedPromisesData);
  });

  it('correctly changes isLoading flag', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      usePromises([getResolvingPromise()])
    );
    expect(result.current.isLoading).toEqual(true);
    await waitForNextUpdate();
    expect(result.current.isLoading).toEqual(false);
  });

  it('correctly sets error when one of the promises rejects', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      usePromises([getResolvingPromise(), getFailingPromise()])
    );

    await waitForNextUpdate();
    expect(result.current.error).toBeDefined();
  });
});
