import axios from 'axios';

class HostProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      host: {
        name: ""
      }
    }
  }

  componentDidMount() {
    axios.get('api/hosts/:id')
      .then(({data}) => this.setState({host: data}))
  }

  render() {
    return (
      <div className="host-profile">
      
      </div>
    )
  }
}