import React, { PureComponent } from 'react'

import { withTranslation } from 'react-i18next';

class HomeScreen extends PureComponent {
  componentDidMount () {
  }

  render () {
    const { t } = this.props
    return (
      <div>
        <p>{t('welcome', { context: 'male'})}</p>
      </div>
    )
  }
}

export default withTranslation()(HomeScreen)