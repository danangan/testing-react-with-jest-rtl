export const transformAPIResponseToEmployeeList = (response) => {
  if (!response) {
    return [];
  }

  return response.data.map((item) => ({
    id: item.id,
    firstName: item.first_name,
    lastName: item.last_name,
  }));
};
