import { BsFillPersonFill as icon } from 'react-icons/bs'

export default {
  name: 'prospect',
  type: 'document',
  title: 'Prospects',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'company',
      title: 'Company / Project name',
      type: 'string'
    },
    {
      name: 'firstContact',
      title: 'First Contact',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'isClient',
      title: 'Accepted',
      type: 'date'
    },
    {
      name: 'isDead',
      title: 'Rejected',
      type: 'date'
    },
    {
      name: 'lastProposal',
      title: 'Last proposal',
      type: 'reference',
      to: [{type: 'proposal'}],
      options: {
        filter: ({ document }) => {
          return{
            filter: "references($id)",
            params: {
              id: document._id
            }
          }
        }
      }
    }
  ],
  preview: {
    select: {
      name: 'name',
      company: 'company'
    },
    prepare({ name, company }) {
      return {
        title: name,
        subtitle: company
      }
    },
  }
}
