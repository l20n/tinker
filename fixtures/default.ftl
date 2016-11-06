hello-world = Hello, World!
hello-user = Hello, { $user1 }!
hello-all = Hello, { $user1, $user2 }!

brand-name =
 *[nominative] Aurora
  [locative]   Aurorze
  
  [gender]     feminine

about = O { brand-name[locative] }

crashed = { brand-name[gender] ->
 *[masculine] { brand-name } uległ awarii.
  [feminine]  { brand-name } uległa awarii.
}

new-notifications = { $num ->
  [0]     No new notifications.
  [1]     One new notification.
  [2]     Two new notifications.
 *[other] { $num } new notifications.
}

percent-complete = { NUMBER($progress, style: "percent") } complete.
