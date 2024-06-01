import ErrorView from "../components/ErrorView/ErrorView";
import React from "react";
import SuccesAddGames from "../components/SuccesAddGame/SuccesAddGame";
import Loading from "../components/Loading/Loading";

export default function Modal(props) {
    const { loading, error, success } = props;
    if (loading) {
        return <Loading />;
    } else if (error) {
        return <ErrorView />;
    } else if (success) {
        return <SuccesAddGames />;
    } else {
        return null;
    }   
}