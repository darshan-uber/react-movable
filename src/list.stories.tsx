import * as React from "react";
import BasicExample from "../examples/Basic";
import TableExample from "../examples/Table";
import TableAutoExample from "../examples/TableAuto";
import SuperSimpleExample from "../examples/SuperSimple";
import RemovableExample from "../examples/Removable";
import RemovableByMoveExample from "../examples/RemovableByMove";
import HandleExample from "../examples/Handle";
import DisabledListExample from "../examples/DisabledList";
import DisabledItemsExample from "../examples/DisabledItems";
import NoAnimationsExample from "../examples/NoAnimations";
import LockVerticallyExample from "../examples/LockVertically";
import VaryingHeightsExample from "../examples/VaryingHeights";
import ScrollingWindowExample from "../examples/ScrollingWindow";
import ScrollingContainerExample from "../examples/ScrollingContainer";
import ScrollingContainerShortExample from "../examples/ScrollingContainerShort";
import InteractiveItemsExample from "../examples/InteractiveItems";
import CustomComponentExample from "../examples/CustomComponent";
import CustomContainerExample from "../examples/CustomContainer";
import ScrollingContainerHandleExample from "../examples/ScrollingContainerHandle";

export const Basic = () => <BasicExample />;
export const TableFixedCellWidths = () => <TableExample />;
export const TableAutoCellWidths = () => <TableAutoExample />;
export const SuperSimple = () => <SuperSimpleExample />;
export const Removable = () => <RemovableExample />;
export const RemovableByMove = () => <RemovableByMoveExample />;
export const Handle = () => <HandleExample />;
export const DisabledList = () => <DisabledListExample />;
export const DisabledItems = () => <DisabledItemsExample />;
export const NoAnimations = () => <NoAnimationsExample />;
export const LockVertically = () => <LockVerticallyExample />;
export const VaryingHeights = () => <VaryingHeightsExample />;
export const ScrollingWindow = () => <ScrollingWindowExample />;
export const ScrollingContainer = () => <ScrollingContainerExample />;
export const ScrollingContainerShort = () => <ScrollingContainerShortExample />;
export const ScrollingContainerWithHandle = () => (
  <ScrollingContainerHandleExample />
);
export const InteractiveItems = () => <InteractiveItemsExample />;
export const CustomComponent = () => <CustomComponentExample />;
export const CustomContainer = () => <CustomContainerExample />;
