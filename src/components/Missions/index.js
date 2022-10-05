/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMissions, loadMissions } from '../../redux/missions';
import './Missions.styles.scss';

const Missions = () => {
  const [missions, setMissions] = useState([]);

  const dispatch = useDispatch();

  const missionData = useSelector(getAllMissions);

  useEffect(() => {
    dispatch(loadMissions());

    setMissions(missionData);
  }, []);

  const renderTableRows = () => (
    <tbody>
      {
        missions.map((mission) => (
          <tr key={mission.id}>
            <td className="mission-name">
              {mission.mission_name}
            </td>
            <td>
              {mission.description}
            </td>
            <td className="member-status">
              <span className={`member-status-${mission.member_status ? 'active' : 'not-active'} `}>
                {
                  mission.member_status ? 'Active Member' : 'Not A Member'
                }
              </span>
            </td>
            <td>
              {
                mission.member_status
                  ? <button type="button" className={`mission-button-${mission.member_status ? 'leave' : 'join'} `}>Leave Mission</button>
                  : <button type="button" className={`mission-button-${mission.member_status ? 'leave' : 'join'} `}>Join Mission</button>
              }
            </td>
          </tr>
        ))
      }
    </tbody>
  );

  return (
    <table>
      <thead>
        <tr>
          <th className="mission-header">Mission</th>
          <th className="description-header">Description</th>
          <th className="status-header">Status</th>
          <th className="button-header"> </th>
        </tr>
      </thead>
      {renderTableRows()}
    </table>
  );
};

export default Missions;
