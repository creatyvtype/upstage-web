import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Layout from 'containers/layout'
import ProductionsPage from 'containers/productions'
import CompaniesPage from 'containers/companies'
import RegistrationPage from 'containers/user_registration'

import { navigateToProductions, navigateToCompanies, navigateToUserRegistration } from 'actions/navigation'

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ navigateToProductions, navigateToCompanies, navigateToUserRegistration }, dispatch)
}

@connect(null, mapDispatchToProps)

export default class Routes extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRedirect to="productions" />
                    <Route path="productions" component={ProductionsPage} onEnter={ this.props.navigateToProductions }/>
                    <Route path="companies" component={CompaniesPage} onEnter={ this.props.navigateToCompanies } />
                    <Route path="sign-up" component={RegistrationPage} onEnter={ this.props.navigateToUserRegistration } />
                </Route>
            </Router>
        )
    }
}
