import { useEffect, useRef, useState  } from 'react'
import styles from './styles.module.css'
const SRC = 'https://v16-webapp.tiktok.com/287fa180d2c587ea4821b8acfda53bbd/61e1ccd9/video/tos/useast2a/tos-useast2a-pve-0068/2cddf5f221a643038f57d34a23f1f46c/?a=1988&br=3122&bt=1561&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-30-nz7ThQ5PRlXq&l=2022011413190001022312814124126D86&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anE7aTw6Zmd2OTMzNzczM0ApNjs6ZTNkO2VlNzxpNDk8PGdwLWhjcjRvaXNgLS1kMTZzc2FjYl8yMy0zNjYzXzBeMGE6Yw%3D%3D&vl=&vr='
export default function VidePlayer () {
    const [playing, setPlaying] = useState(false)
    const video = useRef()
    const handlePlay = () => {
        if(playing){
            video.current.pause()
        }else {

            video.current.play()
        }
        setPlaying(!playing)
    }
    useEffect(() => {

    }, [])
    return (
        <div>
            <video
             className={styles.video} 
             src={SRC} 
             controls={false}
             ref={video}
              />
             <button className={styles.player} onClick={handlePlay} />

        </div>
    )
}