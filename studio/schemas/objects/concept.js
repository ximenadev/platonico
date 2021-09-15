export default {
  name: "concept",
  title: "Concept",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "time",
      title: "Time",
      type: "string"
    },
    {
      name: "hours",
      title: "Hours",
      type: "string"
    },
    {
      name: "deliverables",
      title: "Deliverables",
      type: "array",
      of: [{type: "string"}]
    },
    {
      name: "notes",
      title: "Notes",
      type: "array",
      of: [{type: "string"}]
    },
    {
      name: "price",
      title: "Price",
      type: "number"
    }
  ]
}