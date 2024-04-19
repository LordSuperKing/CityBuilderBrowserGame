import React from 'react'
import { Resources } from '../../redux/resourcesSlice'

type UpgradeCostsProps = {
    resources: Resources
}

export function UpgradeCosts({ resources }: UpgradeCostsProps) {
    const resourceKeys = Object.keys(resources) as Array<keyof Resources>;
  return (
    <div>UpgradeCosts: 
        <ul>
            {resourceKeys.map((key: keyof Resources) => resources[key] !== 0 && <li key={key}>{key}: {resources[key]}</li>)}
        </ul>
    </div>
  )
}
