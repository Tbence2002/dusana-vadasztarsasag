import React from 'react'
import { motion } from 'framer-motion'
import "./About.css"
import { useMembers } from '../../contexts/MembersContext'

function Members() {
    const { membersList } = useMembers();

    return (
        <motion.div className='members-container'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}>
            <h2>Tagjaink</h2>
            <div className='members-content'>
                {membersList.map((member) => {
                    return <div className='members-box' key={member.id}>
                        <div className='members-datas'>
                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                            <p>{member.phonenumber}</p>
                        </div>
                    </div>
                })}
            </div>
        </motion.div>
    )
}

export default Members