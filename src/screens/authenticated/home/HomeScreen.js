import React, { PureComponent } from 'react'

import { withTranslation } from 'react-i18next';

class HomeScreen extends PureComponent {
  componentDidMount () {
    throw(new Error('This is a new error in the ADK Webkit'))
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