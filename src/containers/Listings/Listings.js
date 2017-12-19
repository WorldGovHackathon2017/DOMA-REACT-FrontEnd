import axios from 'axios';

class Listings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listings: []
    }
  }

  componentDidMount() {
    axios.get('api/listings')
      .then(({data}) => this.setState({listings: data}))
  }

  render() {
    return (
      <div className="listings">
      
      </div>
    )
  }
}