import React from 'react';

class CreateCreature extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: '' };
  }

  componentDidMount() {

  }

  update(){

  }

  render() {
    return (
      <div>
        <h1>Creature Creator</h1>
        <form>
          <div className='form-group'>
            <label>Creature Image</label>
            <input className='form-control' ref='creatureImg' type='text' />
            <button className='btn btn-upload' onClick={this.update}>Upload</button>
          </div>
          <div className='form-group'>
            <label>Name</label>
            <input className='form-control' ref='creatureNm' type='text' />
          </div>
          <div className='form-group'>
            <label>Type</label>
            <select className='form-control' ref='type'>
              {this.state.types.map((t, i) => <option key={i}>{t}</option>)}
            </select>
          </div>
          <button className='btn btn-primary' onClick={this.props.create}>Create</button>
        </form>
      </div>
    );
  }
}

export default CreateCreature;
