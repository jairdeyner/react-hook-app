import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Test for useCounter", () => {
  test("should return default values", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("should initialize counter with 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("should increase counter when calling increment()", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(103);
  });

  test("should decrement counter when calling decrement()", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(97);
  });

  test("should reset counter when calling reset()", () => {
    const { result } = renderHook(() => useCounter(100));
    const { reset, increment } = result.current;

    act(() => {
      increment();
      reset();
    });

    expect(result.current.counter).toBe(100);
  });
});
