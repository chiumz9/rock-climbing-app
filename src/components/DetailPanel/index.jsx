import React, {useEffect, useRef} from 'react'
import { Panel, P, CloseWrapper, BG, URL, ButtonWrapper} from './styles'
import {Close, Button} from '../../styles'
import Gym from '../Gym'
import { deleteGym, getGym } from '../../cruds/services/gyms.js';
import { Link, useParams, useNavigate, Routes, Route } from "react-router-dom";
import GymEdit from '../../cruds/screens/GymEdit.jsx'

const DetailPanel = ({ gym, closePanel, state }) => {
  const panelEl = useRef(null)
  const prevGym = useRef(null)
  let navigate = useNavigate()

  useEffect(() => {
    if (prevGym.current !== gym) {
      panelEl.current.scrollTop = 0;
    }

    prevGym.current = gym;
  }, [gym, prevGym])

  return (
    <>
      <BG onClick={closePanel} $state={state}/>
      <Panel $state={state} ref={panelEl}>
        <CloseWrapper onClick={closePanel} $state={state}>
          <Close />
        </CloseWrapper>
        {gym && (
          <>
            <Gym gym={gym} isLarge={true}/>
            <P>{gym.description}</P>
            <P>Contact: {gym.phoneNumber}</P>
            <P>Day-pass: $ {gym.oneDayPass}</P>
            <P>Membership: $ {gym.membership} /month</P>
            <P>Rental: $ {gym.rentalGear}</P>
            <P>Auto Belay? {gym.autoBelay ? "✅" : "🚫"}</P>
            <P>Bouldering? {gym.bouldering ? "✅" : "🚫"}</P>
            <P>Top Roping? {gym.topRoping ? "✅" : "🚫"}</P>
            <P><a style={{textDecoration: 'none', color: "#FFCD01"}}
              href={gym.url}>Gym website: <URL>{gym.url}</URL></a></P>
            <P>{gym.location?.fullAddress}</P>
            <Routes>
            <Route path="/gyms/:id/edit" element={<GymEdit/>}/>
              </Routes>
            <ButtonWrapper>
              <Link to={`/gyms/${gym._id}/edit`}><Button>Edit Gym</Button></Link>
            
            <Button onClick={() => {
              deleteGym(gym._id)
              navigate("/gyms", { replace: true })
              }}>Delete Gym</Button>
              </ButtonWrapper>
          </>
        )}
      </Panel>
    </>
  )
}
export default DetailPanel
