import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-materialize';

class Link extends Component {
    render(){
        const clickCount = (this.props.link.stats && this.props.link.stats.clicks) || 0;
        return (
            <div className="table_container">
                {/* <div>
                    {this.props.link.description} (<a 
                        href={this.props.link.hash}
                    >
                        {this.props.link.hash}
                    </a>) --> clicks: {clickCount}
                </div> */}

                <Table hoverable className="link_table">
                    <thead>
                        <tr>
                        <th>Website Name</th>
                        <th>Hash</th>
                        <th>Click Count</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{this.props.link.description}</td>
                            <td>(<a 
                                    href={this.props.link.hash}
                                >
                                    {this.props.link.hash}
                                </a>)
                            </td>
                            <td>{clickCount}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

Link.propTypes = {
    link: PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string,
        hash: PropTypes.string,
        description: PropTypes.string,
    }),
};

export default Link;