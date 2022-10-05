/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMissions, loadMissions, toggleMission } from '../../redux/missions';
import './Missions.styles.scss';

const Missions = () => {
  const dispatch = useDispatch();

  const missions = useSelector(getAllMissions);

  useEffect(() => {
    dispatch(loadMissions());
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
              <span className={`member-status-${mission.reserved ? 'active' : 'not-active'} `}>
                {
                  mission.reserved ? 'Active Member' : 'Not A Member'
                }
              </span>
            </td>
            <td>
              <div className="button-container">
                {
                  mission.reserved
                    ? (
                      <button
                        type="button"
                        className={`mission-button-${mission.reserved ? 'leave' : 'join'} `}
                        onClick={() => dispatch(toggleMission(mission.id))}
                      >
                        Leave Mission
                      </button>
                    )
                    : (
                      <button
                        type="button"
                        className={`mission-button-${mission.reserved ? 'leave' : 'join'} `}
                        onClick={() => dispatch(toggleMission(mission.id))}
                      >
                        Join Mission
                      </button>
                    )
                }
              </div>
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
