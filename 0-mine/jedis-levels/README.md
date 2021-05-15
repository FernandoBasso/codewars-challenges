# Group Jedis by Skill Level

Given the input:

```
const jedis = [
  { name: 'Yoda', skill: 100 },
  { name: 'Luke', skill: 60 },
  { name: 'Ahsoka', skill: 48 },
  { name: 'Aayla', skill: 72 },
];
```

Group jedis by skill. Abive 65, they are masters. Below that, they are padawans:

```
{
  master: [
    {
      name: "Yoda",
      skill: 100,
    },
    {
      name: "Aayla",
      skill: 72,
    },
  ],
  padawan: [
    {
      name: "Luke",
      skill: 60,
    },
    {
      name: "Ahsoka",
      skill: 48,
    },
  ],
};
```
