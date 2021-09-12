import React, { Component } from 'react'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'
import { withDocument } from 'part:@sanity/form-builder'
import FormField from 'part:@sanity/components/formfields/default'

class VersionInput extends Component {
  versionInput = React.createRef()

  focus = () => {
    this.versionInput.current.focus()
  }

  createPatchFrom(value) {
    return PatchEvent.from(value === '' ? unset() : set(String(value)));
  }

  render() {
    const { document, type, onChange } = this.props;
    const id = document._id?.replace('drafts.', '');
    const value = document.version;

    return(
      <FormField label={type.title} description={type.description}>
        <input
          style={{display:"none"}}
          data-as="input"
          inputMode="text"
          className="sc-khIgEk dlChka"
          type={type.name}
          value={value}
          onChange={event => onChange(this.createPatchFrom(event.target.value))}
          ref={this.versionInput}/>
        <a style={{color: "#000"}} target="__blank" href={`https://proposals.platoni.co/proposal/${id}/v${value}`}>Go to deployed proposal</a>
      </FormField>
    )
  }
}

export default withDocument(VersionInput)
