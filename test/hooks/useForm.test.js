import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Test for useForm", () => {
  const inititalForm = {
    name: "Shanthal",
    email: "st@gmail.com",
  };

  test("should return default values", () => {
    const { result } = renderHook(() => useForm(inititalForm));

    expect(result.current).toEqual({
      name: inititalForm.name,
      email: inititalForm.email,
      formValues: inititalForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("should update the form name", () => {
    const { result } = renderHook(() => useForm(inititalForm));
    const { onInputChange } = result.current;
    const event = { target: { value: "Jair", name: "name" } };

    act(() => {
      onInputChange(event);
    });

    expect(result.current.name).toBe("Jair");
    expect(result.current.formValues.name).toBe("Jair");
  });

  test("should reset the form", () => {
    const { result } = renderHook(() => useForm(inititalForm));
    const { onInputChange, onResetForm } = result.current;
    const event = { target: { value: "Jair", name: "name" } };

    act(() => {
      onInputChange(event);
      onResetForm();
    });

    expect(result.current.name).toBe(inititalForm.name);
    expect(result.current.formValues.name).toBe(inititalForm.name);
  });
});
