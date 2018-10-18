import React, { Component } from 'react';
import { Column, Table, AutoSizer } from 'react-virtualized'

class CustomTable extends Component {
  rowCount = ()=>{
    return this.props.data.length
  }
  rowGetter({ index }){
    const timestamp_utc = new Date(this.props.data[index].timeStamp * 1000)
    const value_bcac = this.props.data[index].value / 10 ** 18
    return {
      ...this.props.data[index],
      timestamp_utc: timestamp_utc.toUTCString(),
      value_bcac: value_bcac
    }
  }

  render() {
    return (
      <div>
        <AutoSizer disableHeight>
          {({ width }) => (
            <Table
              ref="Table"
              height={320}
              headerHeight={40}
              rowHeight={40}
              rowClassName={this._rowClassName}
              rowGetter={this.rowGetter.bind(this)}
              rowCount={this.rowCount()}
              rowRenderer={this._RowRenderer}
              width={width * 0.8}>
              <Column
                dataKey="blockNumber"
                label="区块号"
                disableSort
                width={90}
              />
              <Column
                width={300}
                disableSort
                dataKey="from"
                label="转出地址"
              />
              <Column
                width={300}
                disableSort
                dataKey="to"
                label="转入地址"
              />
              <Column
                width={100}
                disableSort
                dataKey="value_bcac"
                label="BCAC"
              />
              <Column
                width={280}
                disableSort
                dataKey="timestamp_utc"
                label="时间"
              />
            </Table>
          )}
        </AutoSizer>
      </div>
    )
  }

}

export default CustomTable;


