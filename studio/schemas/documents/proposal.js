import { BsCardHeading as icon } from 'react-icons/bs'
import VersionInput from '../../components/VersionInput'

export default {
  name: 'proposal',
  type: 'document',
  title: 'Proposals',
  icon,
  fields: [
    {
      name: 'getVersion',
      title: 'See Proposal',
      description: 'Must be published and deployed before you can see it',
      type: 'string',
      inputComponent: VersionInput,
    },
    {
      name: 'version',
      title: 'Version',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'prospect',
      title: 'Prospect',
      type: 'reference',
      to: [{type: 'prospect'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'concepts',
      title: 'Concepts',
      type: 'array',
      of: [{type: 'concept'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'terms',
      title: 'Terms & Conditions',
      type: 'array',
      of: [{type: 'string'}],
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'prospect.company',
      version: 'version',
      date: 'date'
    },
    prepare({ title, version, date }) {
      return {
        title: title ? `${title} - ${version ? `v${version}` : 'v'}` : 'New Proposal',
        subtitle: date,
      }
    },
  }
}
