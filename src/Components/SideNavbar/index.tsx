
import ViewQuiltRoundedIcon from '@material-ui/icons/ViewQuiltRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import React from 'react';
import './styles.scss'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import withStyles from '@material-ui/core/styles/withStyles';

const VerticalTabs = withStyles(theme => ({
  flexContainer: {
    flexDirection: 'column'
  },
  indicator: {
    display: 'none',
  }
}))(Tabs)


const MyTab = withStyles(theme => ({
  selected: {
    color: '#8964D7',
    borderLeft: '3px solid #8964D7',
    paddingLeft: '8px'
  }
}))(Tab);


class SideNavbar extends React.PureComponent {
  state = { activeIndex: 0 }

  handleChange = (event: object, activeIndex: number) => this.setState({ activeIndex })
  render() {
    const { activeIndex } = this.state;
    return (
      <div className="side-nav-container">
        <VerticalTabs
          value={activeIndex}
          onChange={this.handleChange}
        >
          <MyTab label={<ViewQuiltRoundedIcon />} />
          <MyTab label={<AssignmentRoundedIcon />} />
          <MyTab label={<GroupRoundedIcon />} />
        </VerticalTabs>
    </div>
    )
  }
}

export default SideNavbar;