import jwtDecode from 'jwt-decode'

function decode (token) {
  return jwtDecode(token)
}

function loadDiscordProfile (token) {
  const raw = decode(token)
  return {
    show: true,
    id: raw.id,
    username: raw.username,
    discriminator: raw.discriminator
  }
}

function loadBungieProfile (token) {
  const raw = decode(token)
  const u = {
    show: true,
    id: raw.membershipId,
    username: raw.displayName,
    steam: null,
    xbox: null,
    psn: null
  }

  if (raw.steamDisplayName) {
    u.steam = raw.steamDisplayName
  }

  if (raw.xboxDisplayName) {
    u.xbox = raw.xboxDisplayName
  }

  if (raw.psnDisplayName) {
    u.psn = raw.psnDisplayName
  }

  return u
}

function loadFaceitProfile (token) {
  const raw = decode(token)
  return {
    show: true,
    id: raw.guid,
    username: raw.nickname
  }
}

export { loadDiscordProfile, loadBungieProfile, loadFaceitProfile }
