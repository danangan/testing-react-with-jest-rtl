import { transformAPIResponseToEmployeeList } from "./transformers";

describe("transformAPIResponseToEmployeeList", () => {
  it("should transform api response to employee list", () => {
    const apiResponse = {
      data: [
        {
          id: 1,
          first_name: "john",
          last_name: "doe",
        },
        {
          id: 2,
          first_name: "jane",
          last_name: "doe",
        },
      ],
    };

    const result = transformAPIResponseToEmployeeList(apiResponse);

    expect(result).toStrictEqual([
      {
        id: 1,
        firstName: "john",
        lastName: "doe",
      },
      {
        id: 2,
        firstName: "jane",
        lastName: "doe",
      },
    ]);
  });

  it.each([[null], [undefined], [""]])(
    "should return empty array if api response is falsy value",
    (apiResponse) => {
      const result = transformAPIResponseToEmployeeList(apiResponse);

      expect(result).toStrictEqual([]);
    }
  );
});
