import React from 'react';

class CreateCreature extends React.Component {
  constructor(props) {
    super(props);
    this.state = { creatures: [] , image: ''};
    this.refresh = this.refresh.bind(this);
    this.update=this.update.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    fetch('//localhost:3333/creature')
    .then(r => r.json())
    .then(j => {
      this.setState({ creatures });
    });
  }

  update(e){
    console.log('update function log worked!!', e);
    this.state.image = this.refs.creatureImg.value;
    //this.setState({ image });
    e.preventDefault();
  }

    submit(){
      console.log('update function log worked!!', this);

      const image = this.refs.creatureImg.value;
      const name = this.refs.creatureNm.value;
      const body = JSON.stringify({ image, name });
      fetch('//localhost:3333/creature/createCreature', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then(() => this.refresh());


    }

  render() {
    var divStyle={height: '50px', width: '50px'};
    return (
      <div>
        <h1>Creature Creator</h1>
       <form>
          <div className='form-group'>
            <label>Creature Image</label>
            <input className='form-control1' ref='creatureImg' type='text' />
            <button className='btn btn-upload' onClick={this.update}>Upload</button>
          </div>

                <div style={divStyle}>
                  <a>
                    <img src={this.state.image} alt="test name"/>
                  </a>
                </div>


          <div className='form-group'>
            <label>Name</label>
            <input className='form-control2' ref='creatureNm' type='text' />
          </div>
       </form>
        <button className='btn btn-primary' onClick={this.submit}>Create</button>
      </div>
    );
  }
}

export default CreateCreature;
