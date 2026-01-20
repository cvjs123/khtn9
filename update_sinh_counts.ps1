$content = Get-Content "g:\My Drive\KHTN\js\questions-sinh.js" -Raw
$lines = Get-Content "g:\My Drive\KHTN\js\questions-sinh.js"
$topicMarkers = @("PHÂN TỬ", "TẾ BÀO", "QUY LUẬT", "ỨNG DỤNG", "MÔI TRƯỜNG")
$topicLines = @()
foreach ($marker in $topicMarkers) {
  $escapedMarker = [regex]::Escape($marker)
  $match = $lines | Select-String -Pattern $escapedMarker | Select-Object -First 1
  if ($match) {
    $topicLines += $match.LineNumber - 1  # 0-based
  }
}
$topicLines += $lines.Count  # end
$counts = @()
for ($i = 0; $i -lt $topicLines.Count - 1; $i++) {
  $start = $topicLines[$i]
  $end = $topicLines[$i+1] - 1
  $section = $lines[$start..$end]
  $count = ($section | Select-String "{q:").Count
  $counts += $count
}
# Update _sinhCounts
$sinhCountsLine = "const _sinhCounts = [" + ($counts -join ',') + "];"
$match = $lines | Select-String "const _sinhCounts" | Select-Object -First 1
if ($match) {
    $sinhCountsIndex = $match.LineNumber - 1
    $lines[$sinhCountsIndex] = $sinhCountsLine
}
# Write back
$lines | Set-Content "g:\My Drive\KHTN\js\questions-sinh.js"