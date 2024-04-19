import { Col, Row } from "react-bootstrap";
import { GiAmberMosquito, GiGoldBar, GiStoneAxe, GiStoneBlock, GiStoneSpear, GiWoodPile } from "react-icons/gi";
import { IoFastFoodOutline, IoPeopleSharp } from "react-icons/io5";
import { PiSmiley, PiSmileyAngry } from "react-icons/pi";
import { useAppSelector } from "../../redux/reduxHooks";
import { StateBarItem } from "./StateBarItem";



export function StateBar() {
  const populationState = useAppSelector(
    (state) => state.population
  );
  const resourcesState = useAppSelector(
    (state) => state.resources
  );
  const eventList = useAppSelector((state) => state.events.eventList)

  const showIcon = (id: string) => {
    const event = eventList.find((it) => it.id === id)
    return (event && (event?.eventIsRunning || event?.eventIsComplete))
  }

  return (
    <>
      <Row className="d-flex justify-content-center ">
        <Col>
          <StateBarItem
            description={[<PiSmiley />, <PiSmileyAngry />]}
            value={populationState.satisfaction}
          ></StateBarItem>
          <StateBarItem
            description={[<IoPeopleSharp />]}
            value={populationState.amount}
          ></StateBarItem>
        </Col>
        <Col>
          <StateBarItem
            description={[<IoFastFoodOutline />]}
            value={resourcesState.food}
          ></StateBarItem>
          <StateBarItem description={showIcon("3") ? [<GiWoodPile />
          ] : [""]} value={showIcon("3") ? resourcesState.wood : ""}></StateBarItem>
        </Col>
        <Col>
          <StateBarItem description={showIcon("4") ? [<GiStoneBlock />
          ] : [""]} value={showIcon("4") ? resourcesState.stone : ""}></StateBarItem>
          <StateBarItem description={showIcon("5") ? [<GiAmberMosquito />
          ] : [""]} value={showIcon("5") ? resourcesState.amber : ""}></StateBarItem>
        </Col>
        <Col>
          <StateBarItem description={showIcon("6") ? [<GiStoneAxe />
          ] : [""]} value={showIcon("6") ? resourcesState.tools : ""}></StateBarItem>
          <StateBarItem description={showIcon("7") ? [<GiStoneSpear />
          ] : [""]} value={showIcon("7") ? resourcesState.weapons : ""}></StateBarItem>          </Col>
        <Col>
          <StateBarItem description={[""]} value={""}></StateBarItem>
          <StateBarItem description={[""]} value={""}></StateBarItem>
        </Col>
        <Col>
          <StateBarItem description={[""]} value={""}></StateBarItem>
          <StateBarItem description={[""]} value={""}></StateBarItem>
        </Col>
        <Col>
          <StateBarItem
            description={["BIP"]}
            value={resourcesState.bipPercentage}
          ></StateBarItem>
          <StateBarItem
            description={[<GiGoldBar />]}
            value={resourcesState.gold}
          ></StateBarItem>
        </Col>
      </Row>
    </>
  );
}
