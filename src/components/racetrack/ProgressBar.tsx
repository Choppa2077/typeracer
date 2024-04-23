import { FC, useEffect, useState } from 'react';
import styles from './progressbar.module.css';
import carModel from '../../assets/testCarModel.svg';
import { useAppSelector } from '../../store/hooks';
import { useStartSingleRaceMutation } from '../../services/startSingleApiSlice';
// import { useGetRaceDataQuery } from '../../services/singleRaceApi';

interface ProgressBarParams {
  text: undefined | string;
}
const ProgressBar: FC<ProgressBarParams> = ({ text }) => {
  const [marginForDrive, setMarginForDrive] = useState(20);
  const progressBarWidth = 700;
  const { progress, previousProgress } = useAppSelector((state) => state.race);
  // const { data } = useGetRaceDataQuery();
  // console.log(data?.text_author);
    const [startSingleRace, {data}] = useStartSingleRaceMutation()

  // let intervals: number[] = [];
  // useEffect(() => {
  //   if (text) {
  //     for (let i = 0; i <= text.length; i += 10) {
  //       intervals.push(i);
  //     }
  //   }
  //   // console.log(intervals);
  //   setMarginCount(550 / intervals.length);
  // }, [text]);

  // useEffect(() => {
  //   if (text) {
  //     for (let i = 0; i <= text.length; i += 10) {
  //       intervals.push(i);
  //     }
  //   }
  //   // console.log(intervals);
  //   setMarginCount(550 / intervals.length);
  //   if (text) {
  //     for (let i = 0; i < intervals.length; i++) {
  //       if (progress === intervals[i] && progress > previousProgress) {
  //         setMarginForDrive((prev) => prev + marginCount);
  //         intervals.splice(i, 1);
  //       }
  //       console.log(intervals[i]);
  //     }
  //   }
  // }, [progress]);
  // if (progress%10 === 0 && progress > previousProgress) {
  //   setMarginForDrive((prev) => prev + marginCount);
  // }

  const [usedIntervals, setUsedIntervals] = useState<number[]>([]);
  useEffect(() => {
    if (text) {
      const newIntervals = [];
      for (let i = 0; i <= text.length; i += 10) {
        newIntervals.push(i);
      }

      const unusedIntervals = newIntervals.filter(
        (interval) => !usedIntervals.includes(interval),
      );

      const matchingInterval = unusedIntervals.find(
        (interval) => progress === interval && progress > previousProgress,
      );

      if (matchingInterval !== undefined) {
        setMarginForDrive((prev) => prev + 550 / newIntervals.length);
        setUsedIntervals((prevIntervals) => [
          ...prevIntervals,
          matchingInterval,
        ]);
      }
    }
  }, [progress, text, previousProgress, usedIntervals]);
  // console.log(data?.avatar);

  return (
    <div style={{ width: `${progressBarWidth}px`, height: '51.2px' }}>
      <div
        style={{
          marginLeft: marginForDrive,
          width: 150,
        }}
        className="flex items-center"
      >
        <p>{data?.racer_name}</p>
        <div className=" ml-2">
          <img
            src={carModel}
            alt=""
            width={'70px'}
            height={'30px'}
          />
        </div>
      </div>
      <hr className={styles.dashed} />
    </div>
  );
};

export default ProgressBar;
