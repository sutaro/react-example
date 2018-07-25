"use strict";

import * as React from 'react';
import { ChangeEventHandler } from 'react';

export interface ITextInputProps{
  name: string,
  label: string,
  onChange: React.ChangeEventHandler,
  placeholder: string,
  value: string,
  error: string
}
export class TextInput extends React.Component<ITextInputProps,{}>{
  render () {
    var wrapperClass = 'form-group';
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " " + 'has-error';
    }
    
    return (
     <div className={wrapperClass}>
        <label className="input-label" htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
          <input type="text"
            name={this.props.name}
            className="form-control"
            ref={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
            autoComplete="off"/>
          <div className="input-error">{this.props.error}</div>
        </div>
      </div>
    );
  }
};

export default TextInput;