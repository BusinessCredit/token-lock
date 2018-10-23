import React, { Component } from 'react';
import fetch_bcac_lock, {fetch_bcac_all} from '../utility/fetch'
import QueryResultTable from './table'
import './main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      query: false,
      queryResult: []
    };

    fetch_bcac_all(
      (result) => {
        this.setState({ queryResult: result, query: false})
      }
    )
  }

  onQuery(){
    fetch_bcac_lock(this.state.inputValue,
      (result)=>{
        this.setState({ queryResult: result,  query: true})
      }
    )
  }

  generateResult(){
    return (
      <QueryResultTable data = {this.state.queryResult} />
    )
  }

  generateTotalValue(){
    if(this.state.query === true)
      return this.state.queryResult.map(
        result => result.value / 10 ** 18
      ).reduce(
        (a, b) => a + b, 0
      )
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          BCAC 锁仓查询
        </div>
        <div className="input">
          <div className="input_label">以太坊地址</div>
          <input value={this.state.inputValue} onChange={evt=>this.setState({inputValue:evt.target.value})}/>
          <button onClick={this.onQuery.bind(this)}> 查询 </button>
        </div>
        <div className="lock_number">
          总锁仓量 : {this.generateTotalValue()}
        </div>

        <div className="tx_table">
          {this.generateResult()}
        </div>

        <div className="lock_number">
          未来收益 : 敬请期待
        </div>
        <div className="tx_table">
          
        </div>
      </div>
    );
  }
}

export default Main;

// const mock_data = [
//   {"blockNumber":"6483522","timeStamp":"1539099613","hash":"0xa3a938a6677792ed76875db445b1dcdc7d147e99e1cfe9b44b7e226101adb0c2","nonce":"543","blockHash":"0x0ea2e7fb7e649e3f05f2370d9b512cf604e9682d7f41ff87002009e91e594743","from":"0xbd54a30efb06644a8ec71cdd5415e2563d5643f0","contractAddress":"0xe36df5bb57e80629cfc28a31e5f794071c085eca","to":"0x87d6303da6886515cbe242aeb43132216310b150","value":"21460171416737305000000000","tokenName":"","tokenSymbol":"","tokenDecimal":"","transactionIndex":"39","gas":"6612388","gasPrice":"9000000000","gasUsed":"36752","cumulativeGasUsed":"1340126","input":"0xa9059cbb00000000000000000000000087d6303da6886515cbe242aeb43132216310b15000000000000000000000000000000000000000000011c05e393da56a0179ba00","confirmations":"47364"},
//   {"blockNumber":"6483507","timeStamp":"1539099391","hash":"0x5574a185d5b190a5318c7aa5816552918a7a4957ac3f65f374e7eaf2c2784b9d","nonce":"51","blockHash":"0xef2ab21c72791481d970ac1d4a335f822a652f72c434f5c7d818ed3348934a64","from":"0x18a744e4564601a5241c910aa0cd69aee82287a8","contractAddress":"0xe36df5bb57e80629cfc28a31e5f794071c085eca","to":"0xbd54a30efb06644a8ec71cdd5415e2563d5643f0","value":"15000000000000000000000000","tokenName":"","tokenSymbol":"","tokenDecimal":"","transactionIndex":"40","gas":"54936","gasPrice":"8000000000","gasUsed":"36624","cumulativeGasUsed":"1531550","input":"0xa9059cbb000000000000000000000000bd54a30efb06644a8ec71cdd5415e2563d5643f00000000000000000000000000000000000000000000c685fa11e01ec6f000000","confirmations":"47379"},
//   {"blockNumber":"6483253","timeStamp":"1539095652","hash":"0xff4ed78b30ceff9320942d48776194dcb56b5c1fcee0bc64fa0429c0cdd303cd","nonce":"527","blockHash":"0xbf1007478d4e139e59f6c3824951515ba08c9f00d0867c23ada85db8cdfa0a60","from":"0xbd54a30efb06644a8ec71cdd5415e2563d5643f0","contractAddress":"0xe36df5bb57e80629cfc28a31e5f794071c085eca","to":"0x87d6303da6886515cbe242aeb43132216310b150","value":"6892768333336248000000000","tokenName":"","tokenSymbol":"","tokenDecimal":"","transactionIndex":"6","gas":"6612388","gasPrice":"9000000000","gasUsed":"36752","cumulativeGasUsed":"308140","input":"0xa9059cbb00000000000000000000000087d6303da6886515cbe242aeb43132216310b15000000000000000000000000000000000000000000005b399b856a588d44d3000","confirmations":"47633"},
//   {"blockNumber":"6483106","timeStamp":"1539093714","hash":"0x19461275e0d91bfa5f6222a11ec8d3810c6d2fb5efef0d7c2247d18aeef233d0","nonce":"506","blockHash":"0x664c5439945b25479dc0a70c04abf04ab9b8c8c3348f2fe8019ad2b7909140f1","from":"0xbd54a30efb06644a8ec71cdd5415e2563d5643f0","contractAddress":"0xe36df5bb57e80629cfc28a31e5f794071c085eca","to":"0x87d6303da6886515cbe242aeb43132216310b150","value":"9674355833334758000000000","tokenName":"","tokenSymbol":"","tokenDecimal":"","transactionIndex":"3","gas":"6612388","gasPrice":"9000000000","gasUsed":"36688","cumulativeGasUsed":"403553","input":"0xa9059cbb00000000000000000000000087d6303da6886515cbe242aeb43132216310b15000000000000000000000000000000000000000000008009fe16eabfbff7f7c00","confirmations":"47780"}
// ]