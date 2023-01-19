export function formatData(data, containVolunteers = false) {
  if (containVolunteers) {
    return data.reduce(
      (result, user) => {
        if (user?.reports) {
          result.reports.push(...user.reports);
        }
        if (user?.volunteeringForms) {
          result.volunteeringForms.push(...user.volunteeringForms);
        }
        return result;
      },
      { reports: [], volunteeringForms: [] }
    );
  } else {
    return data.reduce((result, user) => {
      if (user?.reports) {
        result.push(...user.reports);
      }
      if (user?.volunteeringForms) return result;
    }, []);
  }
}
