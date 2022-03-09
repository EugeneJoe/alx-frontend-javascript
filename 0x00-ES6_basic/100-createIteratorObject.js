export default function createIteratorObject(report) {
  const temp = report.allEmployees;
  let values = [];
  temp.forEach((value) => { values = [...values, ...value]; });
  return values;
}
