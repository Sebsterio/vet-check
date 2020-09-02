export const getClinic = (state) => state.clinic;

export const getIsClinicSet = (state) => !!getClinic(state).name;

export const getClinicReminderIsDismissed = (state) =>
	getClinic(state).reminderDismissed;

export const getShouldShowClinicReminder = (state) =>
	!getIsClinicSet(state) && !getClinicReminderIsDismissed(state);

// For ClinicForm
export const getFormData = (state) => {
	const { name, address, email, phone } = getClinic(state);
	return { name, address, email, phone };
};
