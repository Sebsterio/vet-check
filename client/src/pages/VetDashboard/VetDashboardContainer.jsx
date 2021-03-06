import React from "react";
import { connect } from "react-redux";

import { getName, getIsLoading } from "redux/profile/profile-selectors";
import { getFormData, getIsRegistered } from "redux/clinic/clinic-selectors";
import {
	getAugmentedUnseenReports,
	getIsSyncing,
	getAreAnyPetsSyncing,
} from "redux/pets/pets-selectors";
import { modifyReport } from "redux/pets/pets-operations";
import { getIsDemo } from "redux/user/user-selectors";

import { VetDashboard } from "./VetDashboard";

// --------------------------------------------------------------

const mapStateToProps = (state) => ({
	username: getName(state),
	profileLoading: getIsLoading(state),
	clinic: getFormData(state),
	hasClinic: getIsRegistered(state),
	reports: getAugmentedUnseenReports(state),
	syncing: getIsSyncing(state) || getAreAnyPetsSyncing(state),
	isDemo: getIsDemo(state),
});

const mapDispatchToProps = (dispatch) => ({
	modifyReport: (data) => dispatch(modifyReport(data)),
});

const VetDashboardContainer = (props) => <VetDashboard {...props} />;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(VetDashboardContainer);
