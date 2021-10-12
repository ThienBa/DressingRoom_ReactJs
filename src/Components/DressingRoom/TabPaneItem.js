import React from 'react'
import { useDispatch } from 'react-redux'
import { useSpring, animated } from 'react-spring'
import { tryOnClothesAction } from '../../Redux/Actions/ExerciseDressingRoomActions';

export default function TabPaneItem(props) {
    const dispatch = useDispatch();
    const [propAnimatedTabPane, set] = useSpring(() => ({
        opacity: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        from: {
            opacity: 0,
            display: 'none',
        },
        config: { duration: 1000 },
        reset: true
    }))

    return (
        <div className="col-md-3">
            <div className="card text-center">
                <animated.div style={propAnimatedTabPane}>
                    <img style={{ width: 300, height: 500 }} src={props.TabPaneItem.imgSrc_png} alt={props.TabPaneItem.name} />
                </animated.div>
                <img src={props.TabPaneItem.imgSrc_jpg} alt={props.TabPaneItem.name} />
                <h4><b>{props.TabPaneItem.name}</b></h4>
                <button className="btn btn-info" onClick={() => {
                    set({
                        top: props.top,
                        left: props.left,
                        display: 'block',
                        opacity: 0,
                    })
                    setTimeout(() => {
                        dispatch(tryOnClothesAction(props.TabPaneItem))
                        set({
                            opacity: 1,
                            top: 0,
                            left: 0,
                            from: {
                                opacity: 0,
                                display: 'none',
                            },
                            config: { duration: 1000 },
                            reset: true
                        })
                    }, props.left);
                }}>Thử đồ</button>
            </div>
        </div>
    )
}
