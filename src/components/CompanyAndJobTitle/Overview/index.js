import React from 'react';
import PropTypes from 'prop-types';
import CompanyAndJobTitleWrapper from '../CompanyAndJobTitleWrapper';
import OverviewSection from './Overview';

const Overview = ({
  pageType,
  pageName,
  tabType,
  interviewExperiences,
  workExperiences,
  salaryWorkTimes,
  salaryWorkTimeStatistics,
  status,
  page,
}) => (
  <CompanyAndJobTitleWrapper
    pageType={pageType}
    pageName={pageName}
    tabType={tabType}
  >
    {status === 'FETCHED' && (
      <OverviewSection
        pageType={pageType}
        pageName={pageName}
        tabType={tabType}
        interviewExperiences={interviewExperiences}
        workExperiences={workExperiences}
        salaryWorkTimes={salaryWorkTimes}
        salaryWorkTimeStatistics={salaryWorkTimeStatistics}
        page={page}
      />
    )}
  </CompanyAndJobTitleWrapper>
);

Overview.propTypes = {
  pageType: PropTypes.string,
  pageName: PropTypes.string,
  tabType: PropTypes.string,
  interviewExperiences: PropTypes.arrayOf(PropTypes.object),
  workExperiences: PropTypes.arrayOf(PropTypes.object),
  salaryWorkTimes: PropTypes.arrayOf(PropTypes.object),
  salaryWorkTimeStatistics: PropTypes.object,
  status: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default Overview;